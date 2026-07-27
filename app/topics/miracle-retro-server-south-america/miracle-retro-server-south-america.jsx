import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-retro-server-south-america');
}

export default function MiracleRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-retro-server-south-america" />;
}
