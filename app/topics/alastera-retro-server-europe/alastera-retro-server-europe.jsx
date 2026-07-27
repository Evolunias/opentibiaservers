import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-retro-server-europe');
}

export default function AlasteraRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="alastera-retro-server-europe" />;
}
