import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-saintsot-open-tibia');
}

export default function FreshStartSaintsotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-saintsot-open-tibia" />;
}
