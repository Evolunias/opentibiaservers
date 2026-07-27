import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-bosses');
}

export default function RealestaBossesKeywordPage() {
  return <StaticKeywordPage slug="realesta-bosses" />;
}
