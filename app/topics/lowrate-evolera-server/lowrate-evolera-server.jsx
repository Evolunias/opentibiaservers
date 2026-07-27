import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolera-server');
}

export default function LowrateEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolera-server" />;
}
