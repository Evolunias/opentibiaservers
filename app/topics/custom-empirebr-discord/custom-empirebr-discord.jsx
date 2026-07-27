import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-empirebr-discord');
}

export default function CustomEmpirebrDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-empirebr-discord" />;
}
