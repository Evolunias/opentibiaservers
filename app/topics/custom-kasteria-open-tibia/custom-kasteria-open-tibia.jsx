import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-kasteria-open-tibia');
}

export default function CustomKasteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-kasteria-open-tibia" />;
}
