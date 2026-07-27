import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-13-baiak-server');
}

export default function InfernalOt13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-13-baiak-server" />;
}
