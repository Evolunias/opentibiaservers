import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-high-exp-server-sweden');
}

export default function SerenityHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="serenity-high-exp-server-sweden" />;
}
