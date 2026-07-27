import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-coxaot-server');
}

export default function NewSeasonCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-coxaot-server" />;
}
