import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-non-pvp-server-sweden');
}

export default function NilotNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nilot-non-pvp-server-sweden" />;
}
