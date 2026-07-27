import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-saintsot-tibia');
}

export default function CurrentSaintsotTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-saintsot-tibia" />;
}
