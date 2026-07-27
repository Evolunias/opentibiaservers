import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-medivia-tibia');
}

export default function HighrateMediviaTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-medivia-tibia" />;
}
