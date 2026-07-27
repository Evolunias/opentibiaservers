import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realera-tibia');
}

export default function BestRealeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-realera-tibia" />;
}
