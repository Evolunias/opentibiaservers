import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-tibia-private-server-france');
}

export default function BaiakTibiaPrivateServerFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-tibia-private-server-france" />;
}
