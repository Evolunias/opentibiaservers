import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-baiak-server-sweden');
}

export default function MistOfDeathBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-baiak-server-sweden" />;
}
