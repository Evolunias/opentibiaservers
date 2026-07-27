import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-imperianic-ot-server');
}

export default function CurrentImperianicOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-imperianic-ot-server" />;
}
