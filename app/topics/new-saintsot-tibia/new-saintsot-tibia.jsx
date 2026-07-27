import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-saintsot-tibia');
}

export default function NewSaintsotTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-saintsot-tibia" />;
}
