import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-fresh-start-server-canada');
}

export default function SerenityFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="serenity-fresh-start-server-canada" />;
}
