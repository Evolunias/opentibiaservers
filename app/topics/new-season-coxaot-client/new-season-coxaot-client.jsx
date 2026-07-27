import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-coxaot-client');
}

export default function NewSeasonCoxaotClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-coxaot-client" />;
}
