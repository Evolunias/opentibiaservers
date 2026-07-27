import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-germany-servers');
}

export default function OtmadnessGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-germany-servers" />;
}
