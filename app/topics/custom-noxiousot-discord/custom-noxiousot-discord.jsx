import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-noxiousot-discord');
}

export default function CustomNoxiousotDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-noxiousot-discord" />;
}
