import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-coxaot-ot-server');
}

export default function NewSeasonCoxaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-coxaot-ot-server" />;
}
