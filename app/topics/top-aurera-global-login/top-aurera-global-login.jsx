import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-aurera-global-login');
}

export default function TopAureraGlobalLoginKeywordPage() {
  return <StaticKeywordPage slug="top-aurera-global-login" />;
}
