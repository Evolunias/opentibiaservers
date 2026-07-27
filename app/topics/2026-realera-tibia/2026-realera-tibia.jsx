import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-realera-tibia');
}

export default function Keyword2026RealeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="2026-realera-tibia" />;
}
