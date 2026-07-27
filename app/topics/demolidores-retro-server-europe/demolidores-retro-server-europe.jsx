import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-retro-server-europe');
}

export default function DemolidoresRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="demolidores-retro-server-europe" />;
}
