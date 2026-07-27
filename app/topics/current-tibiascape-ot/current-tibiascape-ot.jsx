import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiascape-ot');
}

export default function CurrentTibiascapeOtKeywordPage() {
  return <StaticKeywordPage slug="current-tibiascape-ot" />;
}
