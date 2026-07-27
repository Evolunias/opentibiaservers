import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('quintera-open-pvp');
}

export default function QuinteraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="quintera-open-pvp" />;
}
