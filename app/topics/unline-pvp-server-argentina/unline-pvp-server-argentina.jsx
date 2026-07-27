import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-server-argentina');
}

export default function UnlinePvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-server-argentina" />;
}
