import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-empirebr-website');
}

export default function HighrateEmpirebrWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-empirebr-website" />;
}
