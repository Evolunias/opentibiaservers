import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-fresh-start-server-sweden');
}

export default function MediviaFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="medivia-fresh-start-server-sweden" />;
}
