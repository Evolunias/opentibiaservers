import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-alastera-discord');
}

export default function OfficialAlasteraDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-alastera-discord" />;
}
