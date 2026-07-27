import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thornia-ot');
}

export default function LowrateThorniaOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thornia-ot" />;
}
