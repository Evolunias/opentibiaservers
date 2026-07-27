import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiascape-ot');
}

export default function FreshStartTibiascapeOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiascape-ot" />;
}
