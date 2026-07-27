import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-imperianic-discord');
}

export default function CustomImperianicDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-imperianic-discord" />;
}
