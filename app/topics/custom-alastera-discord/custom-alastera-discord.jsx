import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-alastera-discord');
}

export default function CustomAlasteraDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-alastera-discord" />;
}
