import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-sabrehaven-guide');
}

export default function OfficialSabrehavenGuideKeywordPage() {
  return <StaticKeywordPage slug="official-sabrehaven-guide" />;
}
