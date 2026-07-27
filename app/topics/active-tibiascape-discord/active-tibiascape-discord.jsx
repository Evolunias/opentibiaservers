import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiascape-discord');
}

export default function ActiveTibiascapeDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-tibiascape-discord" />;
}
