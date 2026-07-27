import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-baiak-server-france');
}

export default function OxygenotBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-baiak-server-france" />;
}
