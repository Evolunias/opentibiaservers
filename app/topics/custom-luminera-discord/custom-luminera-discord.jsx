import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-luminera-discord');
}

export default function CustomLumineraDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-luminera-discord" />;
}
