import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-tibia-private-server-poland');
}

export default function BaiakTibiaPrivateServerPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-tibia-private-server-poland" />;
}
