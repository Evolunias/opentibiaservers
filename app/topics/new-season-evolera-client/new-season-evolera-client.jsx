import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolera-client');
}

export default function NewSeasonEvoleraClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolera-client" />;
}
