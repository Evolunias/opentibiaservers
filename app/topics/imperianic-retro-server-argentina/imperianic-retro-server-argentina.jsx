import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-retro-server-argentina');
}

export default function ImperianicRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-retro-server-argentina" />;
}
