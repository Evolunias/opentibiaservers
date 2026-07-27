import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiascape');
}

export default function OfficialTibiascapeKeywordPage() {
  return <StaticKeywordPage slug="official-tibiascape" />;
}
