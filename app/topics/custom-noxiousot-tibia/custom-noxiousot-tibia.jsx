import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-noxiousot-tibia');
}

export default function CustomNoxiousotTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-noxiousot-tibia" />;
}
