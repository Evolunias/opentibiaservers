import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-luminera-open-tibia');
}

export default function LowrateLumineraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-luminera-open-tibia" />;
}
