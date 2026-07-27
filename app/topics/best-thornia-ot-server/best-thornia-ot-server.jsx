import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thornia-ot-server');
}

export default function BestThorniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-thornia-ot-server" />;
}
