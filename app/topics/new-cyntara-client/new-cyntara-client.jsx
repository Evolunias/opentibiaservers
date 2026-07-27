import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-cyntara-client');
}

export default function NewCyntaraClientKeywordPage() {
  return <StaticKeywordPage slug="new-cyntara-client" />;
}
