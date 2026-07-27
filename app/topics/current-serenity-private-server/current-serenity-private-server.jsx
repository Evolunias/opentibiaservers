import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-serenity-private-server');
}

export default function CurrentSerenityPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-serenity-private-server" />;
}
