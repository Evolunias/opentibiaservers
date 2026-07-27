import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classicus-discord');
}

export default function CustomClassicusDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-classicus-discord" />;
}
