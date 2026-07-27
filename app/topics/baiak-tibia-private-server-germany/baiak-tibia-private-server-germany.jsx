import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-tibia-private-server-germany');
}

export default function BaiakTibiaPrivateServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-tibia-private-server-germany" />;
}
