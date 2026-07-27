import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-open-tibia-server-france');
}

export default function BaiakOpenTibiaServerFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-open-tibia-server-france" />;
}
