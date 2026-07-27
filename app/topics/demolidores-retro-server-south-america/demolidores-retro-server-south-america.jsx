import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-retro-server-south-america');
}

export default function DemolidoresRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-retro-server-south-america" />;
}
