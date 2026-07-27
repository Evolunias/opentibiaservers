import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-retro-server-europe');
}

export default function ClassicusRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classicus-retro-server-europe" />;
}
