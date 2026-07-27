import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-alastera-open-tibia');
}

export default function ActiveAlasteraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-alastera-open-tibia" />;
}
