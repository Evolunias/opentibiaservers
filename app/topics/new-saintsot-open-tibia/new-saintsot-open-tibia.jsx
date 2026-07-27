import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-saintsot-open-tibia');
}

export default function NewSaintsotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-saintsot-open-tibia" />;
}
