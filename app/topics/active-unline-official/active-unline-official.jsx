import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-unline-official');
}

export default function ActiveUnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-unline-official" />;
}
