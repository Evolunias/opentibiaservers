import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-unline-official');
}

export default function NewUnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-unline-official" />;
}
