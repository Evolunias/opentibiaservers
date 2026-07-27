import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibianus-client');
}

export default function NewTibianusClientKeywordPage() {
  return <StaticKeywordPage slug="new-tibianus-client" />;
}
