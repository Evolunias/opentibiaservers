import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiascape-ots');
}

export default function ActiveTibiascapeOtsKeywordPage() {
  return <StaticKeywordPage slug="active-tibiascape-ots" />;
}
