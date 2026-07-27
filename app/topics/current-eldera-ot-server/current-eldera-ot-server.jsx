import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eldera-ot-server');
}

export default function CurrentElderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-eldera-ot-server" />;
}
