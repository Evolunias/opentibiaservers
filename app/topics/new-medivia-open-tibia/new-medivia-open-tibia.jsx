import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-medivia-open-tibia');
}

export default function NewMediviaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-medivia-open-tibia" />;
}
