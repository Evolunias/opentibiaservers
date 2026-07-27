import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realera-ot-server');
}

export default function TopRealeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-realera-ot-server" />;
}
