import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-alastera-tibia');
}

export default function CustomAlasteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-alastera-tibia" />;
}
