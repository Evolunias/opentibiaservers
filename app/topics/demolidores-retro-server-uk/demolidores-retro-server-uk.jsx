import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-retro-server-uk');
}

export default function DemolidoresRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="demolidores-retro-server-uk" />;
}
