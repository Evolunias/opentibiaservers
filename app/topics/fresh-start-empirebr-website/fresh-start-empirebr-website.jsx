import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-empirebr-website');
}

export default function FreshStartEmpirebrWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-empirebr-website" />;
}
