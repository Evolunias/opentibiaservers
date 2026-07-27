import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-cyntara-ot');
}

export default function LowrateCyntaraOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-cyntara-ot" />;
}
