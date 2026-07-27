import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-server-usa');
}

export default function LumineraPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-server-usa" />;
}
