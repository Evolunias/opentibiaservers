import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-cyntara-tibia');
}

export default function PopularCyntaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-cyntara-tibia" />;
}
