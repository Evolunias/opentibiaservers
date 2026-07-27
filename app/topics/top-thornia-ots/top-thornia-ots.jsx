import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thornia-ots');
}

export default function TopThorniaOtsKeywordPage() {
  return <StaticKeywordPage slug="top-thornia-ots" />;
}
