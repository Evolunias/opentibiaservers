import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-launcher');
}

export default function MidhemLauncherKeywordPage() {
  return <StaticKeywordPage slug="midhem-launcher" />;
}
