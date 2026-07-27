import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-blazera-tibia');
}

export default function HighrateBlazeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-blazera-tibia" />;
}
