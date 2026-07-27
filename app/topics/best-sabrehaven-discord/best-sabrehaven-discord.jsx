import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-sabrehaven-discord');
}

export default function BestSabrehavenDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-sabrehaven-discord" />;
}
