import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-empirebr-website');
}

export default function TopEmpirebrWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-empirebr-website" />;
}
