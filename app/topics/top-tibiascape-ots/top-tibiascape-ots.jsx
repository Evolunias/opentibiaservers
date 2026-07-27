import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiascape-ots');
}

export default function TopTibiascapeOtsKeywordPage() {
  return <StaticKeywordPage slug="top-tibiascape-ots" />;
}
