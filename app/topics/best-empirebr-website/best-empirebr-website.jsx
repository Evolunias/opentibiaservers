import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-empirebr-website');
}

export default function BestEmpirebrWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-empirebr-website" />;
}
