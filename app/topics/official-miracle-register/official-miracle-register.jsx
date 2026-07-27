import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-miracle-register');
}

export default function OfficialMiracleRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-miracle-register" />;
}
