import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-serenity-private-server');
}

export default function FreshStartSerenityPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-serenity-private-server" />;
}
