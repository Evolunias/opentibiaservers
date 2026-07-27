import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-status-france');
}

export default function BaiakStatusFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-status-france" />;
}
