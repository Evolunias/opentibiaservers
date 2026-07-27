import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thornia-ots');
}

export default function CurrentThorniaOtsKeywordPage() {
  return <StaticKeywordPage slug="current-thornia-ots" />;
}
