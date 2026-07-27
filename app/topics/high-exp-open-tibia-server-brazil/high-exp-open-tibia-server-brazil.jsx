import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-open-tibia-server-brazil');
}

export default function HighExpOpenTibiaServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="high-exp-open-tibia-server-brazil" />;
}
