import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classicus');
}

export default function OfficialClassicusKeywordPage() {
  return <StaticKeywordPage slug="official-classicus" />;
}
