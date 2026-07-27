import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-launcher');
}

export default function UnlineLauncherKeywordPage() {
  return <StaticKeywordPage slug="unline-launcher" />;
}
