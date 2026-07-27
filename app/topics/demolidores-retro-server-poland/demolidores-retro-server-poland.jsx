import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-retro-server-poland');
}

export default function DemolidoresRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="demolidores-retro-server-poland" />;
}
