import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-alastera-tibia');
}

export default function NewAlasteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-alastera-tibia" />;
}
