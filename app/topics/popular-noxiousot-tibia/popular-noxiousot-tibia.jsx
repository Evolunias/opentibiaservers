import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-noxiousot-tibia');
}

export default function PopularNoxiousotTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-noxiousot-tibia" />;
}
