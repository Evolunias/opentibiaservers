import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-launch');
}

export default function TibijkaLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibijka-launch" />;
}
