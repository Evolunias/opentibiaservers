import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-demolidores-discord');
}

export default function NewDemolidoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-demolidores-discord" />;
}
