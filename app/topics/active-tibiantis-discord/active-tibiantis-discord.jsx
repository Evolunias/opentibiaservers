import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiantis-discord');
}

export default function ActiveTibiantisDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-tibiantis-discord" />;
}
