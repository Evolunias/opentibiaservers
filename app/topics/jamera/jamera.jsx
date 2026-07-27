import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('jamera');
}

export default function JameraKeywordPage() {
  return <StaticKeywordPage slug="jamera" />;
}
