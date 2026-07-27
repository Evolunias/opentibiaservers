import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-neprenia-tibia');
}

export default function Keyword2026NepreniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="2026-neprenia-tibia" />;
}
