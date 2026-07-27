import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-noxiousot-tibia');
}

export default function FreshStartNoxiousotTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-noxiousot-tibia" />;
}
