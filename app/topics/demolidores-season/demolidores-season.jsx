import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-season');
}

export default function DemolidoresSeasonKeywordPage() {
  return <StaticKeywordPage slug="demolidores-season" />;
}
