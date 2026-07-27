import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-tibia-private-server-argentina');
}

export default function BaiakTibiaPrivateServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-tibia-private-server-argentina" />;
}
