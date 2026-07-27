import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-unline-server');
}

export default function LowrateUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-unline-server" />;
}
