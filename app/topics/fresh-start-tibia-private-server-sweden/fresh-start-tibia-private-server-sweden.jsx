import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibia-private-server-sweden');
}

export default function FreshStartTibiaPrivateServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibia-private-server-sweden" />;
}
