import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-serenity-private-server');
}

export default function LowrateSerenityPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-serenity-private-server" />;
}
