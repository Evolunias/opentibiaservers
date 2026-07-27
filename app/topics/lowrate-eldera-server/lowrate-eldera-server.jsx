import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eldera-server');
}

export default function LowrateElderaServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eldera-server" />;
}
