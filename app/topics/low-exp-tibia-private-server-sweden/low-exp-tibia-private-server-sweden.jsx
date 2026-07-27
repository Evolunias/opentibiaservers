import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-tibia-private-server-sweden');
}

export default function LowExpTibiaPrivateServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="low-exp-tibia-private-server-sweden" />;
}
