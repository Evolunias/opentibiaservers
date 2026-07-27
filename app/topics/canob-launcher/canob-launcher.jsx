import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-launcher');
}

export default function CanobLauncherKeywordPage() {
  return <StaticKeywordPage slug="canob-launcher" />;
}
