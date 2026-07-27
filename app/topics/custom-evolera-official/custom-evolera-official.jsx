import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolera-official');
}

export default function CustomEvoleraOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-evolera-official" />;
}
