import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-discord');
}

export default function OtlandDiscordKeywordPage() {
  return <StaticKeywordPage slug="otland-discord" />;
}
