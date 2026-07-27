import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classicus-client');
}

export default function NewClassicusClientKeywordPage() {
  return <StaticKeywordPage slug="new-classicus-client" />;
}
