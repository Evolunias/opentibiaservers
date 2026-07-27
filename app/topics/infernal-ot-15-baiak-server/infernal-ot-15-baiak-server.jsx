import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-15-baiak-server');
}

export default function InfernalOt15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-15-baiak-server" />;
}
