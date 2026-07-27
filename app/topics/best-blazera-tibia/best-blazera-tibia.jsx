import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-blazera-tibia');
}

export default function BestBlazeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-blazera-tibia" />;
}
