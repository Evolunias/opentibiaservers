import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-serenity-private-server');
}

export default function OfficialSerenityPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-serenity-private-server" />;
}
