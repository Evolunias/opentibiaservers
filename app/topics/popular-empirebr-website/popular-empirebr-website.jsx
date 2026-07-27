import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-empirebr-website');
}

export default function PopularEmpirebrWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-empirebr-website" />;
}
