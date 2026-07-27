import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-saintsot-open-tibia');
}

export default function NoResetSaintsotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-saintsot-open-tibia" />;
}
