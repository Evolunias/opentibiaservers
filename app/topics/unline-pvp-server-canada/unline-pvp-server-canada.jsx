import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-server-canada');
}

export default function UnlinePvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-server-canada" />;
}
