import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thornia-login');
}

export default function CurrentThorniaLoginKeywordPage() {
  return <StaticKeywordPage slug="current-thornia-login" />;
}
