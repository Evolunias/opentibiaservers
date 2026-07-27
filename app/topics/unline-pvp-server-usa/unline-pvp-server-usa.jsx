import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-server-usa');
}

export default function UnlinePvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-server-usa" />;
}
