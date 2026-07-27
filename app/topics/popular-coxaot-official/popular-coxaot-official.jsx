import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-coxaot-official');
}

export default function PopularCoxaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-coxaot-official" />;
}
