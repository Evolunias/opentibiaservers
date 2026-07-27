import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-aurera-global-login');
}

export default function ActiveAureraGlobalLoginKeywordPage() {
  return <StaticKeywordPage slug="active-aurera-global-login" />;
}
