import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-tibiascape-tibia');
}

export default function Keyword2026TibiascapeTibiaKeywordPage() {
  return <StaticKeywordPage slug="2026-tibiascape-tibia" />;
}
