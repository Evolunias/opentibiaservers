import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-open-tibia-server-brazil');
}

export default function EvoOpenTibiaServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evo-open-tibia-server-brazil" />;
}
