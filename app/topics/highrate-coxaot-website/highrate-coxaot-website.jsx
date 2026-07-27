import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-coxaot-website');
}

export default function HighrateCoxaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-coxaot-website" />;
}
