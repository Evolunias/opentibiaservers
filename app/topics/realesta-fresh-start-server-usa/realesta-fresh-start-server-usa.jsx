import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-fresh-start-server-usa');
}

export default function RealestaFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realesta-fresh-start-server-usa" />;
}
