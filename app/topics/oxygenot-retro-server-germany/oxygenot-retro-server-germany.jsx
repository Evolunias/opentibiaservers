import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-retro-server-germany');
}

export default function OxygenotRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-retro-server-germany" />;
}
