import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-14-baiak-server');
}

export default function InfernalOt14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-14-baiak-server" />;
}
