import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-training');
}

export default function ArchlightTrainingKeywordPage() {
  return <StaticKeywordPage slug="archlight-training" />;
}
