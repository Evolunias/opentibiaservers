import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('celesta-tibia');
}

export default function CelestaTibiaKeywordPage() {
  return <StaticKeywordPage slug="celesta-tibia" />;
}
