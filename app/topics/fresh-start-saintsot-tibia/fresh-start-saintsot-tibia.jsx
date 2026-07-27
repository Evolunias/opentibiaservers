import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-saintsot-tibia');
}

export default function FreshStartSaintsotTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-saintsot-tibia" />;
}
