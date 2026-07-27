import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-launcher');
}

export default function ThaisotLauncherKeywordPage() {
  return <StaticKeywordPage slug="thaisot-launcher" />;
}
