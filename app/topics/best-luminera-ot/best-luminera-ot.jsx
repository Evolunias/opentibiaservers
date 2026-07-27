import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-luminera-ot');
}

export default function BestLumineraOtKeywordPage() {
  return <StaticKeywordPage slug="best-luminera-ot" />;
}
