import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-noxiousot-open-tibia');
}

export default function NewNoxiousotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-noxiousot-open-tibia" />;
}
