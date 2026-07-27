import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvpe-server-sweden');
}

export default function TibiaoriginsPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvpe-server-sweden" />;
}
