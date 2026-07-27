import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-tibia');
}

export default function RealestaTibiaKeywordPage() {
  return <StaticKeywordPage slug="realesta-tibia" />;
}
