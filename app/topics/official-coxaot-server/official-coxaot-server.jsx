import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-coxaot-server');
}

export default function OfficialCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="official-coxaot-server" />;
}
