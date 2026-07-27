import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-retro-server-usa');
}

export default function RealestaRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realesta-retro-server-usa" />;
}
