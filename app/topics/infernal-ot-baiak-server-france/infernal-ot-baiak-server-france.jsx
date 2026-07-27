import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-baiak-server-france');
}

export default function InfernalOtBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-baiak-server-france" />;
}
