import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-coxaot-login');
}

export default function OfficialCoxaotLoginKeywordPage() {
  return <StaticKeywordPage slug="official-coxaot-login" />;
}
