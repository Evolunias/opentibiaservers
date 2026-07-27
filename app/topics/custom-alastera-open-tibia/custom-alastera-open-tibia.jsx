import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-alastera-open-tibia');
}

export default function CustomAlasteraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-alastera-open-tibia" />;
}
