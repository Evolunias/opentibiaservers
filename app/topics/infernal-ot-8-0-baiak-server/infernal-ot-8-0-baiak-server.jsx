import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-0-baiak-server');
}

export default function InfernalOt80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-0-baiak-server" />;
}
