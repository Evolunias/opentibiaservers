import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-fresh-start-server-sweden');
}

export default function SabrehavenFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-fresh-start-server-sweden" />;
}
