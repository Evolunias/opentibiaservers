import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-alastera-tibia');
}

export default function ActiveAlasteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-alastera-tibia" />;
}
