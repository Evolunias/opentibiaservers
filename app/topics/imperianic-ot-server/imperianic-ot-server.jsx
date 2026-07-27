import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-ot-server');
}

export default function ImperianicOtServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-ot-server" />;
}
