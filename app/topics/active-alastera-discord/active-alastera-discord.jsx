import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-alastera-discord');
}

export default function ActiveAlasteraDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-alastera-discord" />;
}
