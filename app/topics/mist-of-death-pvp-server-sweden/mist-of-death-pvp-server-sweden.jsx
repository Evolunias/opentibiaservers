import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvp-server-sweden');
}

export default function MistOfDeathPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvp-server-sweden" />;
}
