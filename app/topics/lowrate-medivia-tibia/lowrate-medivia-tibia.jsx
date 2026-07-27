import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-medivia-tibia');
}

export default function LowrateMediviaTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-medivia-tibia" />;
}
