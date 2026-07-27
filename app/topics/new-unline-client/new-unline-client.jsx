import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-unline-client');
}

export default function NewUnlineClientKeywordPage() {
  return <StaticKeywordPage slug="new-unline-client" />;
}
