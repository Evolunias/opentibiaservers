import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-launcher');
}

export default function DuraOnlineLauncherKeywordPage() {
  return <StaticKeywordPage slug="dura-online-launcher" />;
}
