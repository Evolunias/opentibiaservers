import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-launcher');
}

export default function KasteriaLauncherKeywordPage() {
  return <StaticKeywordPage slug="kasteria-launcher" />;
}
