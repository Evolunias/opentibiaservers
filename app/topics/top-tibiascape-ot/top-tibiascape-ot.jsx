import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiascape-ot');
}

export default function TopTibiascapeOtKeywordPage() {
  return <StaticKeywordPage slug="top-tibiascape-ot" />;
}
