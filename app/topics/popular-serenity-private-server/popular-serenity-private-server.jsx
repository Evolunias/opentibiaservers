import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-serenity-private-server');
}

export default function PopularSerenityPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-serenity-private-server" />;
}
