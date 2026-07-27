import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-launcher');
}

export default function EvoluniaLauncherKeywordPage() {
  return <StaticKeywordPage slug="evolunia-launcher" />;
}
