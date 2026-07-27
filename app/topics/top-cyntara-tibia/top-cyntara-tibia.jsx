import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-cyntara-tibia');
}

export default function TopCyntaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-cyntara-tibia" />;
}
