import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-retro-server-poland');
}

export default function AlasteraRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="alastera-retro-server-poland" />;
}
