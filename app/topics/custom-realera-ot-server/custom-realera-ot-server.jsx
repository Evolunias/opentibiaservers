import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realera-ot-server');
}

export default function CustomRealeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-realera-ot-server" />;
}
