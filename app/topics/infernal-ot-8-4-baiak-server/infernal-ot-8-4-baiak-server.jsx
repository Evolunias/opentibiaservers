import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-4-baiak-server');
}

export default function InfernalOt84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-4-baiak-server" />;
}
