import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolera-official');
}

export default function ActiveEvoleraOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-evolera-official" />;
}
