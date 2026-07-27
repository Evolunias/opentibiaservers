import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-cyntara-tibia');
}

export default function LowrateCyntaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-cyntara-tibia" />;
}
