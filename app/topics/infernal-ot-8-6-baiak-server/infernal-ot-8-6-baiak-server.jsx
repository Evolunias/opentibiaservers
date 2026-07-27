import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-6-baiak-server');
}

export default function InfernalOt86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-6-baiak-server" />;
}
