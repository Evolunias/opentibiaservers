import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-noxiousot-open-tibia');
}

export default function PopularNoxiousotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-noxiousot-open-tibia" />;
}
