import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-server-germany');
}

export default function LumineraPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-server-germany" />;
}
