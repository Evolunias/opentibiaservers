import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-open-tibia');
}

export default function NoxiousotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-open-tibia" />;
}
