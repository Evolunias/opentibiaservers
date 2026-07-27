import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-neprenia');
}

export default function CustomNepreniaKeywordPage() {
  return <StaticKeywordPage slug="custom-neprenia" />;
}
