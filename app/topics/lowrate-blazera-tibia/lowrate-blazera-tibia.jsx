import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-blazera-tibia');
}

export default function LowrateBlazeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-blazera-tibia" />;
}
