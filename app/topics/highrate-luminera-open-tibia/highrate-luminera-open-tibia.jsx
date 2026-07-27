import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-luminera-open-tibia');
}

export default function HighrateLumineraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-luminera-open-tibia" />;
}
