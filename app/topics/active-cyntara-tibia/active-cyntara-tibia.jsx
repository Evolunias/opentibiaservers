import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-cyntara-tibia');
}

export default function ActiveCyntaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-cyntara-tibia" />;
}
