import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-training');
}

export default function OriginaltibiaTrainingKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-training" />;
}
