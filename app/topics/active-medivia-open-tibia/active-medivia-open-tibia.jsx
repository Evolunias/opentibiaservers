import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-medivia-open-tibia');
}

export default function ActiveMediviaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-medivia-open-tibia" />;
}
