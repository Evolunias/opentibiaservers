import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-launcher');
}

export default function ElderaLauncherKeywordPage() {
  return <StaticKeywordPage slug="eldera-launcher" />;
}
