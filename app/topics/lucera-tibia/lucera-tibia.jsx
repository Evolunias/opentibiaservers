import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lucera-tibia');
}

export default function LuceraTibiaKeywordPage() {
  return <StaticKeywordPage slug="lucera-tibia" />;
}
