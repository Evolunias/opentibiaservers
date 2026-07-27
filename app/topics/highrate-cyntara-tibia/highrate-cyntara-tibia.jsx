import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-cyntara-tibia');
}

export default function HighrateCyntaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-cyntara-tibia" />;
}
