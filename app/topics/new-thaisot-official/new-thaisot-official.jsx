import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thaisot-official');
}

export default function NewThaisotOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-thaisot-official" />;
}
