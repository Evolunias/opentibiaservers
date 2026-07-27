import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-retro-server-germany');
}

export default function ImperianicRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="imperianic-retro-server-germany" />;
}
