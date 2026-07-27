import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-retro-server-germany');
}

export default function DemolidoresRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="demolidores-retro-server-germany" />;
}
