import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-empirebr-website');
}

export default function ActiveEmpirebrWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-empirebr-website" />;
}
