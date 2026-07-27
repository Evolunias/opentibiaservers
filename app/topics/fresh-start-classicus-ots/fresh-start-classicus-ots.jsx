import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classicus-ots');
}

export default function FreshStartClassicusOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classicus-ots" />;
}
