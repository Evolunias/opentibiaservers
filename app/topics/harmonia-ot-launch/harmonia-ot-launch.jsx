import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-launch');
}

export default function HarmoniaOtLaunchKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-launch" />;
}
