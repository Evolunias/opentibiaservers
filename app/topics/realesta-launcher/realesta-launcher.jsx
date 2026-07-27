import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-launcher');
}

export default function RealestaLauncherKeywordPage() {
  return <StaticKeywordPage slug="realesta-launcher" />;
}
