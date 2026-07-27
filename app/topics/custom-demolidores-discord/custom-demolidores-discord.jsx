import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-demolidores-discord');
}

export default function CustomDemolidoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-demolidores-discord" />;
}
