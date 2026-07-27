import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thornia-ot');
}

export default function CurrentThorniaOtKeywordPage() {
  return <StaticKeywordPage slug="current-thornia-ot" />;
}
