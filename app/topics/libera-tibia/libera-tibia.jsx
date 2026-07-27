import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('libera-tibia');
}

export default function LiberaTibiaKeywordPage() {
  return <StaticKeywordPage slug="libera-tibia" />;
}
