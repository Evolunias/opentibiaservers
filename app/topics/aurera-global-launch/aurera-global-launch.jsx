import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-launch');
}

export default function AureraGlobalLaunchKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-launch" />;
}
