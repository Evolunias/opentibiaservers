import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-launcher');
}

export default function ThorniaLauncherKeywordPage() {
  return <StaticKeywordPage slug="thornia-launcher" />;
}
