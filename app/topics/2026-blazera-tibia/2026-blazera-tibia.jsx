import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-blazera-tibia');
}

export default function Keyword2026BlazeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="2026-blazera-tibia" />;
}
