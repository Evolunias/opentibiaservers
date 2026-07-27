import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-official');
}

export default function UnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="unline-official" />;
}
