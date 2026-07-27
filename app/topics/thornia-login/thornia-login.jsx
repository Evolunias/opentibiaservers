import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-login');
}

export default function ThorniaLoginKeywordPage() {
  return <StaticKeywordPage slug="thornia-login" />;
}
