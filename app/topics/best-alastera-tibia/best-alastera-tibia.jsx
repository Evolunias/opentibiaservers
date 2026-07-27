import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-alastera-tibia');
}

export default function BestAlasteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-alastera-tibia" />;
}
