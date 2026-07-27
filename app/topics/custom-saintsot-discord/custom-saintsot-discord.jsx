import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-saintsot-discord');
}

export default function CustomSaintsotDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-saintsot-discord" />;
}
