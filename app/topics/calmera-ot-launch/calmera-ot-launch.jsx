import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-launch');
}

export default function CalmeraOtLaunchKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-launch" />;
}
