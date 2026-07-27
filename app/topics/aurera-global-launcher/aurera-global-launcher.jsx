import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-launcher');
}

export default function AureraGlobalLauncherKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-launcher" />;
}
