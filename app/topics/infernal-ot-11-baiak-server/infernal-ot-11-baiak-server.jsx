import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-11-baiak-server');
}

export default function InfernalOt11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-11-baiak-server" />;
}
