import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-empirebr-online');
}

export default function CustomEmpirebrOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-empirebr-online" />;
}
