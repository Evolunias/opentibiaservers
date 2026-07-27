import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eldera-ot-server');
}

export default function CustomElderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-eldera-ot-server" />;
}
