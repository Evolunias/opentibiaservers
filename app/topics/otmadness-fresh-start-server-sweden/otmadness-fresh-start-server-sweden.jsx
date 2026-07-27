import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-fresh-start-server-sweden');
}

export default function OtmadnessFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="otmadness-fresh-start-server-sweden" />;
}
