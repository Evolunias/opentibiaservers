import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-coxaot-discord');
}

export default function CustomCoxaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-coxaot-discord" />;
}
