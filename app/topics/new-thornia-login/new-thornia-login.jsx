import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thornia-login');
}

export default function NewThorniaLoginKeywordPage() {
  return <StaticKeywordPage slug="new-thornia-login" />;
}
