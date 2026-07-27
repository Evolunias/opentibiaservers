import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-cyntara-tibia');
}

export default function FreshStartCyntaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-cyntara-tibia" />;
}
