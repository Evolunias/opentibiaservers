import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-saintsot-open-tibia');
}

export default function CurrentSaintsotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-saintsot-open-tibia" />;
}
