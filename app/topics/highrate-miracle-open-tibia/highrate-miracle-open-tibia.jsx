import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-miracle-open-tibia');
}

export default function HighrateMiracleOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-miracle-open-tibia" />;
}
