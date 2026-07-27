import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-launcher');
}

export default function MiracleLauncherKeywordPage() {
  return <StaticKeywordPage slug="miracle-launcher" />;
}
