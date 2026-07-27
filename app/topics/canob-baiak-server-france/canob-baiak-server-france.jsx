import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-baiak-server-france');
}

export default function CanobBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="canob-baiak-server-france" />;
}
