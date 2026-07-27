import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-launch-france');
}

export default function HighExpLaunchFranceKeywordPage() {
  return <StaticKeywordPage slug="high-exp-launch-france" />;
}
