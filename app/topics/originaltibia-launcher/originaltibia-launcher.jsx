import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-launcher');
}

export default function OriginaltibiaLauncherKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-launcher" />;
}
