import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-empirebr-website');
}

export default function CurrentEmpirebrWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-empirebr-website" />;
}
