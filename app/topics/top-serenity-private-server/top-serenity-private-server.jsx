import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-serenity-private-server');
}

export default function TopSerenityPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-serenity-private-server" />;
}
