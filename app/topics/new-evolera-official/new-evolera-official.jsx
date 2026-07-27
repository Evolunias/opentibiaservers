import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolera-official');
}

export default function NewEvoleraOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-evolera-official" />;
}
