import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-launcher');
}

export default function EvoleraLauncherKeywordPage() {
  return <StaticKeywordPage slug="evolera-launcher" />;
}
