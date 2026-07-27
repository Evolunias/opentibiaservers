import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-cyntara-ot');
}

export default function HighrateCyntaraOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-cyntara-ot" />;
}
