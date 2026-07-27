import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eldera-private-server');
}

export default function LowrateElderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eldera-private-server" />;
}
