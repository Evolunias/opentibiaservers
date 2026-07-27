import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-non-pvp-server-argentina');
}

export default function NilotNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nilot-non-pvp-server-argentina" />;
}
