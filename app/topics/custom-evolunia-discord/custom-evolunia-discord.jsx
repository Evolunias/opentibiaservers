import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolunia-discord');
}

export default function CustomEvoluniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-evolunia-discord" />;
}
