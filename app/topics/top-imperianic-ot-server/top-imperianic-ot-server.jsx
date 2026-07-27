import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-imperianic-ot-server');
}

export default function TopImperianicOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-imperianic-ot-server" />;
}
