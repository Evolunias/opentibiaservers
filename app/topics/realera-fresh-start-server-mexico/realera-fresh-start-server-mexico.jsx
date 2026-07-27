import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-fresh-start-server-mexico');
}

export default function RealeraFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realera-fresh-start-server-mexico" />;
}
