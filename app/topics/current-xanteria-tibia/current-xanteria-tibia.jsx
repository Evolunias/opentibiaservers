import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-xanteria-tibia');
}

export default function CurrentXanteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-xanteria-tibia" />;
}
