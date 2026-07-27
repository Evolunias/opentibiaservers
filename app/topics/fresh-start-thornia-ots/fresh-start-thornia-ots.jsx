import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thornia-ots');
}

export default function FreshStartThorniaOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thornia-ots" />;
}
