import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-retro-server-uk');
}

export default function UnlineRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="unline-retro-server-uk" />;
}
