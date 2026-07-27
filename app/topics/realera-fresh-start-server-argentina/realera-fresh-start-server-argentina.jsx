import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-fresh-start-server-argentina');
}

export default function RealeraFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realera-fresh-start-server-argentina" />;
}
