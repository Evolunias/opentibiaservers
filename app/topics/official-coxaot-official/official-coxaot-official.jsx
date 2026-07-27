import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-coxaot-official');
}

export default function OfficialCoxaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-coxaot-official" />;
}
