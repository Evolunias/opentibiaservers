import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ot-server-france');
}

export default function BaiakOtServerFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-ot-server-france" />;
}
