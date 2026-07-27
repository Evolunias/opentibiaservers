import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thornia-login');
}

export default function FreshStartThorniaLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thornia-login" />;
}
