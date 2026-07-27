import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-retro-server-sweden');
}

export default function DemolidoresRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="demolidores-retro-server-sweden" />;
}
