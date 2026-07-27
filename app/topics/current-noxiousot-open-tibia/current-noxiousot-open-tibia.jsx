import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-noxiousot-open-tibia');
}

export default function CurrentNoxiousotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-noxiousot-open-tibia" />;
}
