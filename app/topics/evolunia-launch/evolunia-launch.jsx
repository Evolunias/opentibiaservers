import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-launch');
}

export default function EvoluniaLaunchKeywordPage() {
  return <StaticKeywordPage slug="evolunia-launch" />;
}
