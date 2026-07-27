import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-baiak-server-south-america');
}

export default function InfernalOtBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-baiak-server-south-america" />;
}
