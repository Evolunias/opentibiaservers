import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-neprenia');
}

export default function Keyword2026NepreniaKeywordPage() {
  return <StaticKeywordPage slug="2026-neprenia" />;
}
