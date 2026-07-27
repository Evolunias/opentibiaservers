import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolera-login');
}

export default function NewSeasonEvoleraLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolera-login" />;
}
