import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-launcher');
}

export default function CyntaraLauncherKeywordPage() {
  return <StaticKeywordPage slug="cyntara-launcher" />;
}
