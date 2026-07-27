import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-saintsot-tibia');
}

export default function NoResetSaintsotTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-saintsot-tibia" />;
}
