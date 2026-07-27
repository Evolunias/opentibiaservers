import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thaisot-official');
}

export default function CustomThaisotOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-thaisot-official" />;
}
