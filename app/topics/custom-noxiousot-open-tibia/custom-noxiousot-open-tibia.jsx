import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-noxiousot-open-tibia');
}

export default function CustomNoxiousotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-noxiousot-open-tibia" />;
}
