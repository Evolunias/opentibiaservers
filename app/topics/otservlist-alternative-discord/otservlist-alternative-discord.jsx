import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-discord');
}

export default function OtservlistAlternativeDiscordKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-discord" />;
}
