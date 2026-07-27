import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-fresh-start-server-argentina');
}

export default function RealestaFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realesta-fresh-start-server-argentina" />;
}
