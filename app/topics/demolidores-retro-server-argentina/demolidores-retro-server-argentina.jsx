import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-retro-server-argentina');
}

export default function DemolidoresRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-retro-server-argentina" />;
}
