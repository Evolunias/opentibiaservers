import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-coxaot-official');
}

export default function TopCoxaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-coxaot-official" />;
}
