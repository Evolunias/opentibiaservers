import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-noxiousot-tibia');
}

export default function CurrentNoxiousotTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-noxiousot-tibia" />;
}
