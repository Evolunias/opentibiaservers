import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-noxiousot-tibia');
}

export default function BestNoxiousotTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-noxiousot-tibia" />;
}
