import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-demolidores-discord');
}

export default function ActiveDemolidoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-demolidores-discord" />;
}
