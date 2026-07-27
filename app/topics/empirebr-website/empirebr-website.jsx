import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-website');
}

export default function EmpirebrWebsiteKeywordPage() {
  return <StaticKeywordPage slug="empirebr-website" />;
}
