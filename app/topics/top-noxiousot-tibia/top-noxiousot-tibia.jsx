import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-noxiousot-tibia');
}

export default function TopNoxiousotTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-noxiousot-tibia" />;
}
