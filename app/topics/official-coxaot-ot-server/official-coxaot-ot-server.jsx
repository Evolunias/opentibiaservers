import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-coxaot-ot-server');
}

export default function OfficialCoxaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-coxaot-ot-server" />;
}
