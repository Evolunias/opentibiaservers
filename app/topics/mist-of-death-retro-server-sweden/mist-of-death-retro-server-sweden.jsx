import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-retro-server-sweden');
}

export default function MistOfDeathRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-retro-server-sweden" />;
}
