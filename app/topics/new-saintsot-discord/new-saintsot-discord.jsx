import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-saintsot-discord');
}

export default function NewSaintsotDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-saintsot-discord" />;
}
