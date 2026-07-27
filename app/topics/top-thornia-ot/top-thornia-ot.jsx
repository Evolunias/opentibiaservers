import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thornia-ot');
}

export default function TopThorniaOtKeywordPage() {
  return <StaticKeywordPage slug="top-thornia-ot" />;
}
