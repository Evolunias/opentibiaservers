import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-launch');
}

export default function OtmadnessLaunchKeywordPage() {
  return <StaticKeywordPage slug="otmadness-launch" />;
}
