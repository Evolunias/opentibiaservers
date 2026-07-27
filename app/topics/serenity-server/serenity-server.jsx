import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-server');
}

export default function SerenityServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-server" />;
}
