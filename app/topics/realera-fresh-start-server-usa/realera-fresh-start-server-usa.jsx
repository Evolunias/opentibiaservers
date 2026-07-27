import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-fresh-start-server-usa');
}

export default function RealeraFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realera-fresh-start-server-usa" />;
}
