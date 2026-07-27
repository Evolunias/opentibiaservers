import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-aurera-global-login');
}

export default function OfficialAureraGlobalLoginKeywordPage() {
  return <StaticKeywordPage slug="official-aurera-global-login" />;
}
