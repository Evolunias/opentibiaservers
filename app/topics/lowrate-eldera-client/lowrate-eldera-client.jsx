import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eldera-client');
}

export default function LowrateElderaClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eldera-client" />;
}
