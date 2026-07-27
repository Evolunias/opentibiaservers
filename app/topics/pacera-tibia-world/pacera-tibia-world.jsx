import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pacera-tibia-world');
}

export default function PaceraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="pacera-tibia-world" />;
}
