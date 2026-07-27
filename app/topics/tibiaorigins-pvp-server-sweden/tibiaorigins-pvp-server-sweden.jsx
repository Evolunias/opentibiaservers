import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-server-sweden');
}

export default function TibiaoriginsPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-server-sweden" />;
}
