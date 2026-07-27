import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-exp-rate');
}

export default function ArchlightExpRateKeywordPage() {
  return <StaticKeywordPage slug="archlight-exp-rate" />;
}
