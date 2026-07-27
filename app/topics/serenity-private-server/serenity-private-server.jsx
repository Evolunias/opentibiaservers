import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-private-server');
}

export default function SerenityPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-private-server" />;
}
