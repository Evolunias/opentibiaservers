import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-retro-server-sweden');
}

export default function ImperianicRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="imperianic-retro-server-sweden" />;
}
