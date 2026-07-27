import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-kasteria-open-tibia');
}

export default function TopKasteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-kasteria-open-tibia" />;
}
