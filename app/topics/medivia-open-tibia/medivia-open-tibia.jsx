import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-open-tibia');
}

export default function MediviaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="medivia-open-tibia" />;
}
