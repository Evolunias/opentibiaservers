import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-retro-server-sweden');
}

export default function SabrehavenRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-retro-server-sweden" />;
}
