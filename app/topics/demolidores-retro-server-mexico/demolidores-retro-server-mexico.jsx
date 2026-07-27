import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-retro-server-mexico');
}

export default function DemolidoresRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="demolidores-retro-server-mexico" />;
}
