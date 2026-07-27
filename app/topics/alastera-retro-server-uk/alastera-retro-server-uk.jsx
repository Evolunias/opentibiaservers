import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-retro-server-uk');
}

export default function AlasteraRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="alastera-retro-server-uk" />;
}
