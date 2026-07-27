import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-list');
}

export default function OtlandListKeywordPage() {
  return <StaticKeywordPage slug="otland-list" />;
}
