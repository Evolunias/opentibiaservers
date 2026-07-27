import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-unline-discord');
}

export default function CustomUnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-unline-discord" />;
}
