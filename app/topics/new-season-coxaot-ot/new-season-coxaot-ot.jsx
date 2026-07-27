import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-coxaot-ot');
}

export default function NewSeasonCoxaotOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-coxaot-ot" />;
}
