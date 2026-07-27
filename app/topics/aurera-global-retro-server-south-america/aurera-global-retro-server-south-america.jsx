import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-retro-server-south-america');
}

export default function AureraGlobalRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-retro-server-south-america" />;
}
