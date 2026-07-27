import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-imperianic-discord');
}

export default function ActiveImperianicDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-imperianic-discord" />;
}
