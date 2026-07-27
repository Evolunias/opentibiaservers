import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-luminera-ots');
}

export default function BestLumineraOtsKeywordPage() {
  return <StaticKeywordPage slug="best-luminera-ots" />;
}
