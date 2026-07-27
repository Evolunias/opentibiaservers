import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-cyntara-client');
}

export default function ActiveCyntaraClientKeywordPage() {
  return <StaticKeywordPage slug="active-cyntara-client" />;
}
