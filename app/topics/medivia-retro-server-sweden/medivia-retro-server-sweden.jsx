import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-retro-server-sweden');
}

export default function MediviaRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="medivia-retro-server-sweden" />;
}
