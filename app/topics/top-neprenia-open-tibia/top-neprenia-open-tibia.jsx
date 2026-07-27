import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-neprenia-open-tibia');
}

export default function TopNepreniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-neprenia-open-tibia" />;
}
