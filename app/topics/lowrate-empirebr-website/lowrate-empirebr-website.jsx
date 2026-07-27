import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-empirebr-website');
}

export default function LowrateEmpirebrWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-empirebr-website" />;
}
