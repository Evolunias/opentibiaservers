import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-unline-official');
}

export default function CustomUnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-unline-official" />;
}
