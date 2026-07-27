import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-coxaot-official');
}

export default function NewSeasonCoxaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-coxaot-official" />;
}
