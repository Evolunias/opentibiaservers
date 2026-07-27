import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-noxiousot-open-tibia');
}

export default function FreshStartNoxiousotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-noxiousot-open-tibia" />;
}
