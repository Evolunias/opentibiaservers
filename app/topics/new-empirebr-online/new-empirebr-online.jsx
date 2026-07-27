import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-empirebr-online');
}

export default function NewEmpirebrOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-empirebr-online" />;
}
