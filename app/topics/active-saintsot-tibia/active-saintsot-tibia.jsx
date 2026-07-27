import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-saintsot-tibia');
}

export default function ActiveSaintsotTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-saintsot-tibia" />;
}
