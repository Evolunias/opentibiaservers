import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thornia-server');
}

export default function NewThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="new-thornia-server" />;
}
