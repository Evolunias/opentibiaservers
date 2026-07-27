import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-tibia-private-server-brazil');
}

export default function BaiakTibiaPrivateServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-tibia-private-server-brazil" />;
}
