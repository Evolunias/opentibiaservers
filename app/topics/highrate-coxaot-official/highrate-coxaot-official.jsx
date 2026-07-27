import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-coxaot-official');
}

export default function HighrateCoxaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-coxaot-official" />;
}
