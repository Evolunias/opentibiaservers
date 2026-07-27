import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-unline-login');
}

export default function OfficialUnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="official-unline-login" />;
}
