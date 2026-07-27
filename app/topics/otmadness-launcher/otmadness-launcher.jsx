import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-launcher');
}

export default function OtmadnessLauncherKeywordPage() {
  return <StaticKeywordPage slug="otmadness-launcher" />;
}
