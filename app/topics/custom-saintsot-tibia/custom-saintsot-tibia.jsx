import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-saintsot-tibia');
}

export default function CustomSaintsotTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-saintsot-tibia" />;
}
