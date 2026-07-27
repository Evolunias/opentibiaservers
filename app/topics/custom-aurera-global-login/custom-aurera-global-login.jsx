import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-aurera-global-login');
}

export default function CustomAureraGlobalLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-aurera-global-login" />;
}
