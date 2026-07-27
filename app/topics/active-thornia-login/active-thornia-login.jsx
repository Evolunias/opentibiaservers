import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thornia-login');
}

export default function ActiveThorniaLoginKeywordPage() {
  return <StaticKeywordPage slug="active-thornia-login" />;
}
