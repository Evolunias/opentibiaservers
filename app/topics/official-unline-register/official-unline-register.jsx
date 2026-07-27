import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-unline-register');
}

export default function OfficialUnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-unline-register" />;
}
