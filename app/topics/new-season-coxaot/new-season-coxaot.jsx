import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-coxaot');
}

export default function NewSeasonCoxaotKeywordPage() {
  return <StaticKeywordPage slug="new-season-coxaot" />;
}
