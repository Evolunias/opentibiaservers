import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-sabrehaven-tibia');
}

export default function HighrateSabrehavenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-sabrehaven-tibia" />;
}
