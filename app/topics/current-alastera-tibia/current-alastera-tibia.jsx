import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-alastera-tibia');
}

export default function CurrentAlasteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-alastera-tibia" />;
}
