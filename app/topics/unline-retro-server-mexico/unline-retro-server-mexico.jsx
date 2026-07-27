import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-retro-server-mexico');
}

export default function UnlineRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="unline-retro-server-mexico" />;
}
