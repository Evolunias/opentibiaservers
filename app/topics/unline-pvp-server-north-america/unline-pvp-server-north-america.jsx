import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-server-north-america');
}

export default function UnlinePvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-server-north-america" />;
}
