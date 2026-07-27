import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-ot');
}

export default function ThorniaOtKeywordPage() {
  return <StaticKeywordPage slug="thornia-ot" />;
}
