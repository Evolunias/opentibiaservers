import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-noxiousot-tibia');
}

export default function NewNoxiousotTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-noxiousot-tibia" />;
}
