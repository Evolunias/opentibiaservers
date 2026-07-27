import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-retro-server-usa');
}

export default function ImperianicRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-retro-server-usa" />;
}
