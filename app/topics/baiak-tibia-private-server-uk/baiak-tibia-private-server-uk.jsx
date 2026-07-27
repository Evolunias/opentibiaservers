import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-tibia-private-server-uk');
}

export default function BaiakTibiaPrivateServerUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-tibia-private-server-uk" />;
}
