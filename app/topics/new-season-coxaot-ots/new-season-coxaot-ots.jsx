import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-coxaot-ots');
}

export default function NewSeasonCoxaotOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-coxaot-ots" />;
}
