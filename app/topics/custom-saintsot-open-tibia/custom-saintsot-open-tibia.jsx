import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-saintsot-open-tibia');
}

export default function CustomSaintsotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-saintsot-open-tibia" />;
}
