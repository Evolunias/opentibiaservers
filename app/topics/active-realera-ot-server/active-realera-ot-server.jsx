import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realera-ot-server');
}

export default function ActiveRealeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-realera-ot-server" />;
}
