import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-launcher');
}

export default function TibijkaLauncherKeywordPage() {
  return <StaticKeywordPage slug="tibijka-launcher" />;
}
