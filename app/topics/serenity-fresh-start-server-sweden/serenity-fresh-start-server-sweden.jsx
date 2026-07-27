import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-fresh-start-server-sweden');
}

export default function SerenityFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="serenity-fresh-start-server-sweden" />;
}
