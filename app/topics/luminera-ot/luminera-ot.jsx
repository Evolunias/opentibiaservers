import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-ot');
}

export default function LumineraOtKeywordPage() {
  return <StaticKeywordPage slug="luminera-ot" />;
}
