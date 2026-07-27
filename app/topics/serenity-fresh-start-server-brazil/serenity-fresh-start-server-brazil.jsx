import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-fresh-start-server-brazil');
}

export default function SerenityFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="serenity-fresh-start-server-brazil" />;
}
