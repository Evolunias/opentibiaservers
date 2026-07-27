import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-non-pvp-server-sweden');
}

export default function MistOfDeathNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-non-pvp-server-sweden" />;
}
