import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thornia-ot');
}

export default function FreshStartThorniaOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thornia-ot" />;
}
