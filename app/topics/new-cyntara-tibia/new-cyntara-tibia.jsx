import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-cyntara-tibia');
}

export default function NewCyntaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-cyntara-tibia" />;
}
