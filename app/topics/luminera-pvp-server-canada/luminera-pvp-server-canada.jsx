import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-server-canada');
}

export default function LumineraPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-server-canada" />;
}
