import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-open-tibia');
}

export default function KasteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-open-tibia" />;
}
