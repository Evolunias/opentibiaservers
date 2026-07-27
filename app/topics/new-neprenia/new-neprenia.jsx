import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-neprenia');
}

export default function NewNepreniaKeywordPage() {
  return <StaticKeywordPage slug="new-neprenia" />;
}
