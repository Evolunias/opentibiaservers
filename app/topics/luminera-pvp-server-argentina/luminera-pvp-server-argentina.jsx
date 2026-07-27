import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-server-argentina');
}

export default function LumineraPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-server-argentina" />;
}
