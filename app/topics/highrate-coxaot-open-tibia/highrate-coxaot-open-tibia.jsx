import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-coxaot-open-tibia');
}

export default function HighrateCoxaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-coxaot-open-tibia" />;
}
