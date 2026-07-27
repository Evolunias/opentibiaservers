import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classick-drakoria');
}

export default function OfficialClassickDrakoriaKeywordPage() {
  return <StaticKeywordPage slug="official-classick-drakoria" />;
}
