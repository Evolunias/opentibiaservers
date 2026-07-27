import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-empirebr-discord');
}

export default function NewEmpirebrDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-empirebr-discord" />;
}
