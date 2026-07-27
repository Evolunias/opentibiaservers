import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-luminera-ot');
}

export default function PopularLumineraOtKeywordPage() {
  return <StaticKeywordPage slug="popular-luminera-ot" />;
}
