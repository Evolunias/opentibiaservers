import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-kasteria-open-tibia');
}

export default function ActiveKasteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-kasteria-open-tibia" />;
}
