import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-luminera-ot-server');
}

export default function BestLumineraOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-luminera-ot-server" />;
}
