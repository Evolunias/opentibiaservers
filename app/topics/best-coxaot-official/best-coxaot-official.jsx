import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-coxaot-official');
}

export default function BestCoxaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-coxaot-official" />;
}
