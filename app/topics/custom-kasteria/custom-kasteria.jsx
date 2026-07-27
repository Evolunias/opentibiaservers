import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-kasteria');
}

export default function CustomKasteriaKeywordPage() {
  return <StaticKeywordPage slug="custom-kasteria" />;
}
