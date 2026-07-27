import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-tibia-private-server-europe');
}

export default function BaiakTibiaPrivateServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-tibia-private-server-europe" />;
}
