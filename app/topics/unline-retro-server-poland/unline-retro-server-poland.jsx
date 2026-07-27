import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-retro-server-poland');
}

export default function UnlineRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="unline-retro-server-poland" />;
}
