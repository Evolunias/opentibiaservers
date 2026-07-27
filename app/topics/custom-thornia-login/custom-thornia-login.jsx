import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thornia-login');
}

export default function CustomThorniaLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-thornia-login" />;
}
