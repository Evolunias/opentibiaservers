import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('celesta-tibia-world');
}

export default function CelestaTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="celesta-tibia-world" />;
}
