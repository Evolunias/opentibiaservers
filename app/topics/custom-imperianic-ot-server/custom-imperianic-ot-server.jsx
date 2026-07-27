import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-imperianic-ot-server');
}

export default function CustomImperianicOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-imperianic-ot-server" />;
}
