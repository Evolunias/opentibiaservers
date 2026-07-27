import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-serenity-private-server');
}

export default function BestSerenityPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-serenity-private-server" />;
}
