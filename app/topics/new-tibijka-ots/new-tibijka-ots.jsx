import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibijka-ots');
}

export default function NewTibijkaOtsKeywordPage() {
  return <StaticKeywordPage slug="new-tibijka-ots" />;
}
