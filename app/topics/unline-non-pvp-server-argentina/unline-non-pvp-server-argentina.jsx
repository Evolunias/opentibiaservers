import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-non-pvp-server-argentina');
}

export default function UnlineNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="unline-non-pvp-server-argentina" />;
}
