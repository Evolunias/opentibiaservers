import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-neprenia');
}

export default function ActiveNepreniaKeywordPage() {
  return <StaticKeywordPage slug="active-neprenia" />;
}
