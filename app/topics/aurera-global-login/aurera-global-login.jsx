import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-login');
}

export default function AureraGlobalLoginKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-login" />;
}
