import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-server-sweden');
}

export default function NilotPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-server-sweden" />;
}
