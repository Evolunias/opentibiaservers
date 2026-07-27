import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classicus-ots');
}

export default function CurrentClassicusOtsKeywordPage() {
  return <StaticKeywordPage slug="current-classicus-ots" />;
}
