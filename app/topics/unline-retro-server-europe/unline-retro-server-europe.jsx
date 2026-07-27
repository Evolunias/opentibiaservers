import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-retro-server-europe');
}

export default function UnlineRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="unline-retro-server-europe" />;
}
