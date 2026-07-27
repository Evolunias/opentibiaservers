import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-discord');
}

export default function OtclientDiscordKeywordPage() {
  return <StaticKeywordPage slug="otclient-discord" />;
}
