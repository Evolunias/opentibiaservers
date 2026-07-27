import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-coxaot-website');
}

export default function OfficialCoxaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-coxaot-website" />;
}
