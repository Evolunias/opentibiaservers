import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-retro-server-usa');
}

export default function UnlineRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="unline-retro-server-usa" />;
}
