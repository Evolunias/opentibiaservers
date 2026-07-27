import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-serenity-private-server');
}

export default function NewSeasonSerenityPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-serenity-private-server" />;
}
