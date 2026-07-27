import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiascape-ots');
}

export default function NewTibiascapeOtsKeywordPage() {
  return <StaticKeywordPage slug="new-tibiascape-ots" />;
}
