import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-retro-server-canada');
}

export default function DemolidoresRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-retro-server-canada" />;
}
