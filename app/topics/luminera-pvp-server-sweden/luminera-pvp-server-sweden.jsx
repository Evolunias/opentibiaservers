import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-server-sweden');
}

export default function LumineraPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-server-sweden" />;
}
