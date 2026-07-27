import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-private-server');
}

export default function NepreniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-private-server" />;
}
