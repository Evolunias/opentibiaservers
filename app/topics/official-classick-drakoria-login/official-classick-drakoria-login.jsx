import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classick-drakoria-login');
}

export default function OfficialClassickDrakoriaLoginKeywordPage() {
  return <StaticKeywordPage slug="official-classick-drakoria-login" />;
}
