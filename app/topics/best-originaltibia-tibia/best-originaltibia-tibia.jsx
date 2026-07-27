import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-originaltibia-tibia');
}

export default function BestOriginaltibiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-originaltibia-tibia" />;
}
