import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-medivia-tibia');
}

export default function BestMediviaTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-medivia-tibia" />;
}
