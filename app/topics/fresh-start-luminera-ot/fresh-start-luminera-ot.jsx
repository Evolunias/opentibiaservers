import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-luminera-ot');
}

export default function FreshStartLumineraOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-luminera-ot" />;
}
