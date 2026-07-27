import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-saintsot-open-tibia');
}

export default function ActiveSaintsotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-saintsot-open-tibia" />;
}
