import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-non-pvp-server-sweden');
}

export default function TibiaoriginsNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-non-pvp-server-sweden" />;
}
