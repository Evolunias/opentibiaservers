import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-noxiousot-open-tibia');
}

export default function ActiveNoxiousotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-noxiousot-open-tibia" />;
}
