import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-serenity-private-server');
}

export default function NewSerenityPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-serenity-private-server" />;
}
