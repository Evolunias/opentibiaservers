import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-open-tibia-server-brazil');
}

export default function LowExpOpenTibiaServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="low-exp-open-tibia-server-brazil" />;
}
