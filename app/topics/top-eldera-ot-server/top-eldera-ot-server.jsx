import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eldera-ot-server');
}

export default function TopElderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-eldera-ot-server" />;
}
