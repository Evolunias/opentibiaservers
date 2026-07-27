import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-alastera-tibia');
}

export default function FreshStartAlasteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-alastera-tibia" />;
}
