import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia');
}

export default function NepreniaKeywordPage() {
  return <StaticKeywordPage slug="neprenia" />;
}
