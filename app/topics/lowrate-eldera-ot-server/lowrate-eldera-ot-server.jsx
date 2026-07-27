import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eldera-ot-server');
}

export default function LowrateElderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eldera-ot-server" />;
}
