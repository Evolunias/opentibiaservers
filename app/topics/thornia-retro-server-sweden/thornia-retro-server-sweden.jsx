import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-retro-server-sweden');
}

export default function ThorniaRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thornia-retro-server-sweden" />;
}
