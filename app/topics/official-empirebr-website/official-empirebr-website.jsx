import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-empirebr-website');
}

export default function OfficialEmpirebrWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-empirebr-website" />;
}
