import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-retro-server-usa');
}

export default function DemolidoresRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-retro-server-usa" />;
}
