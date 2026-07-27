import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realesta-tibia');
}

export default function BestRealestaTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-realesta-tibia" />;
}
