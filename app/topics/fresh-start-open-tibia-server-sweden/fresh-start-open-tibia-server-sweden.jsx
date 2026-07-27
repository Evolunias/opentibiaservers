import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-open-tibia-server-sweden');
}

export default function FreshStartOpenTibiaServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-open-tibia-server-sweden" />;
}
