import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-noxiousot-open-tibia');
}

export default function TopNoxiousotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-noxiousot-open-tibia" />;
}
