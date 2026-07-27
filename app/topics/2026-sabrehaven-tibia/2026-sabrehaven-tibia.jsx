import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-sabrehaven-tibia');
}

export default function Keyword2026SabrehavenTibiaKeywordPage() {
  return <StaticKeywordPage slug="2026-sabrehaven-tibia" />;
}
