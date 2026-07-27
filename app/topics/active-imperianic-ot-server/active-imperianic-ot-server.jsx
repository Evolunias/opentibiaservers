import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-imperianic-ot-server');
}

export default function ActiveImperianicOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-imperianic-ot-server" />;
}
