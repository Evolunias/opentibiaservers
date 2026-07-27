import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-retro-server-brazil');
}

export default function UnlineRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="unline-retro-server-brazil" />;
}
