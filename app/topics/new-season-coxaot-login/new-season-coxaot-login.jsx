import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-coxaot-login');
}

export default function NewSeasonCoxaotLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-coxaot-login" />;
}
