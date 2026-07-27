import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-luminera-ots');
}

export default function PopularLumineraOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-luminera-ots" />;
}
