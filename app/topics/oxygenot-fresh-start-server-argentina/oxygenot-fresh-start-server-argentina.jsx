import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-fresh-start-server-argentina');
}

export default function OxygenotFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-fresh-start-server-argentina" />;
}
