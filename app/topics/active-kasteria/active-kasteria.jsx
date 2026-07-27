import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-kasteria');
}

export default function ActiveKasteriaKeywordPage() {
  return <StaticKeywordPage slug="active-kasteria" />;
}
