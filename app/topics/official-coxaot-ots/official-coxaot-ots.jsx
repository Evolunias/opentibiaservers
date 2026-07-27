import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-coxaot-ots');
}

export default function OfficialCoxaotOtsKeywordPage() {
  return <StaticKeywordPage slug="official-coxaot-ots" />;
}
