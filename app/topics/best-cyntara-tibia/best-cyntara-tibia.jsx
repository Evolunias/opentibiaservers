import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-cyntara-tibia');
}

export default function BestCyntaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-cyntara-tibia" />;
}
