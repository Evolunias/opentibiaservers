import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-retro-server-north-america');
}

export default function DemolidoresRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-retro-server-north-america" />;
}
