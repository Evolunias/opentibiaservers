import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-1-baiak-server');
}

export default function InfernalOt81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-1-baiak-server" />;
}
