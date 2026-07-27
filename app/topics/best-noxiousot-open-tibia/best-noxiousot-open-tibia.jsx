import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-noxiousot-open-tibia');
}

export default function BestNoxiousotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-noxiousot-open-tibia" />;
}
