import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-retro-server-sweden');
}

export default function NostaltherRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nostalther-retro-server-sweden" />;
}
