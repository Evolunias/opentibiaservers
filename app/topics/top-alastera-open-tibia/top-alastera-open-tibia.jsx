import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-alastera-open-tibia');
}

export default function TopAlasteraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-alastera-open-tibia" />;
}
