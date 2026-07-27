import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-training');
}

export default function SabrehavenTrainingKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-training" />;
}
