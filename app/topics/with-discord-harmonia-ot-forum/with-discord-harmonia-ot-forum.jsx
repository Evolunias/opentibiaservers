import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-harmonia-ot-forum');
}

export default function WithDiscordHarmoniaOtForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-harmonia-ot-forum" />;
}
