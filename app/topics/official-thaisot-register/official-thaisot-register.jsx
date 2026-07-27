import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thaisot-register');
}

export default function OfficialThaisotRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-thaisot-register" />;
}
