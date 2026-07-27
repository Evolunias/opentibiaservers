import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-saintsot-discord');
}

export default function BestSaintsotDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-saintsot-discord" />;
}
