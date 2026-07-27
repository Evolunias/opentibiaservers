import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-eldera-tibia');
}

export default function Keyword2026ElderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="2026-eldera-tibia" />;
}
