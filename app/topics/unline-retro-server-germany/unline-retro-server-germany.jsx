import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-retro-server-germany');
}

export default function UnlineRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="unline-retro-server-germany" />;
}
