import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-discord');
}

export default function OtServersDiscordKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-discord" />;
}
