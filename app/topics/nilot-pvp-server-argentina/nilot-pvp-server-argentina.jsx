import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-server-argentina');
}

export default function NilotPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-server-argentina" />;
}
