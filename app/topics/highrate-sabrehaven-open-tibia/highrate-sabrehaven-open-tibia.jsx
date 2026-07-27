import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-sabrehaven-open-tibia');
}

export default function HighrateSabrehavenOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-sabrehaven-open-tibia" />;
}
