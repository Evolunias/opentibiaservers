import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-alastera-open-tibia');
}

export default function CurrentAlasteraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-alastera-open-tibia" />;
}
