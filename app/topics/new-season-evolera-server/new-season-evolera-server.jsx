import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolera-server');
}

export default function NewSeasonEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolera-server" />;
}
