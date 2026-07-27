import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-launch-mexico');
}

export default function BaiakLaunchMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-launch-mexico" />;
}
