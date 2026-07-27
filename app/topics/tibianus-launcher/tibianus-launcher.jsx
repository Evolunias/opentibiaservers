import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-launcher');
}

export default function TibianusLauncherKeywordPage() {
  return <StaticKeywordPage slug="tibianus-launcher" />;
}
