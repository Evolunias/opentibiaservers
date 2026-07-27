import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thaisot-official');
}

export default function ActiveThaisotOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-thaisot-official" />;
}
