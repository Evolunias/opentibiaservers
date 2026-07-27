import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thornia-login');
}

export default function TopThorniaLoginKeywordPage() {
  return <StaticKeywordPage slug="top-thornia-login" />;
}
