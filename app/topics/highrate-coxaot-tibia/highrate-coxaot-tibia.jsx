import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-coxaot-tibia');
}

export default function HighrateCoxaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-coxaot-tibia" />;
}
