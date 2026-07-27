import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-launcher');
}

export default function OlderaLauncherKeywordPage() {
  return <StaticKeywordPage slug="oldera-launcher" />;
}
