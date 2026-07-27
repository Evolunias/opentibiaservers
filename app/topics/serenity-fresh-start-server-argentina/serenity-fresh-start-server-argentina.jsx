import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-fresh-start-server-argentina');
}

export default function SerenityFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="serenity-fresh-start-server-argentina" />;
}
