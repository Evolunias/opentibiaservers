import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-1-baiak-server');
}

export default function InfernalOt71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-1-baiak-server" />;
}
