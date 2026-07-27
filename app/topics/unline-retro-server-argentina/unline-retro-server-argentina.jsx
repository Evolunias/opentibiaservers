import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-retro-server-argentina');
}

export default function UnlineRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="unline-retro-server-argentina" />;
}
