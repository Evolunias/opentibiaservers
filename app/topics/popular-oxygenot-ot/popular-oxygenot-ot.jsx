import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oxygenot-ot');
}

export default function PopularOxygenotOtKeywordPage() {
  return <StaticKeywordPage slug="popular-oxygenot-ot" />;
}
