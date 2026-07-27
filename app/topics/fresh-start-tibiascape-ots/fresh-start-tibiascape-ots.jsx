import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiascape-ots');
}

export default function FreshStartTibiascapeOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiascape-ots" />;
}
