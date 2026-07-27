import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-saintsot-discord');
}

export default function ActiveSaintsotDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-saintsot-discord" />;
}
