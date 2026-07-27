import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-discord');
}

export default function OtservlistDiscordKeywordPage() {
  return <StaticKeywordPage slug="otservlist-discord" />;
}
