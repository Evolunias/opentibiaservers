import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eldera-ot');
}

export default function WithDiscordElderaOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eldera-ot" />;
}
