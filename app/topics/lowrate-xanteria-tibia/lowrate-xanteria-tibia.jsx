import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-xanteria-tibia');
}

export default function LowrateXanteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-xanteria-tibia" />;
}
