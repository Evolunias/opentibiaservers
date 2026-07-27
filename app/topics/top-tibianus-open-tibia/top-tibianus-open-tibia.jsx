import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibianus-open-tibia');
}

export default function TopTibianusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-tibianus-open-tibia" />;
}
