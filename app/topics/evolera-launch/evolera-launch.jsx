import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-launch');
}

export default function EvoleraLaunchKeywordPage() {
  return <StaticKeywordPage slug="evolera-launch" />;
}
