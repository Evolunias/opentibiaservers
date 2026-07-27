import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-mist-of-death-discord');
}

export default function ActiveMistOfDeathDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-mist-of-death-discord" />;
}
