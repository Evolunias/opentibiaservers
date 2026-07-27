import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pacera-tibia');
}

export default function PaceraTibiaKeywordPage() {
  return <StaticKeywordPage slug="pacera-tibia" />;
}
