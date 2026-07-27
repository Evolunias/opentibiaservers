import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-tibianus-tibia');
}

export default function Keyword2026TibianusTibiaKeywordPage() {
  return <StaticKeywordPage slug="2026-tibianus-tibia" />;
}
