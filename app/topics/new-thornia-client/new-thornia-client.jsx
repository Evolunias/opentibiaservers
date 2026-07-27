import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thornia-client');
}

export default function NewThorniaClientKeywordPage() {
  return <StaticKeywordPage slug="new-thornia-client" />;
}
