import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-retro-server-sweden');
}

export default function SaintsotRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="saintsot-retro-server-sweden" />;
}
