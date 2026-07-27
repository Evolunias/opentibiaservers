import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-retro-server-sweden');
}

export default function NilotRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nilot-retro-server-sweden" />;
}
