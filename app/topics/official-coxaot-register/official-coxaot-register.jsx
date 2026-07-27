import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-coxaot-register');
}

export default function OfficialCoxaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-coxaot-register" />;
}
