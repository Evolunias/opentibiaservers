import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibianus-open-tibia');
}

export default function LowrateTibianusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibianus-open-tibia" />;
}
