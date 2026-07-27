import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-noxiousot-tibia');
}

export default function ActiveNoxiousotTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-noxiousot-tibia" />;
}
