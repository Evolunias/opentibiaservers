import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiantis-discord');
}

export default function CustomTibiantisDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiantis-discord" />;
}
