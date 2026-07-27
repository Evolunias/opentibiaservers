import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-fresh-start-server-sweden');
}

export default function MiracleFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="miracle-fresh-start-server-sweden" />;
}
