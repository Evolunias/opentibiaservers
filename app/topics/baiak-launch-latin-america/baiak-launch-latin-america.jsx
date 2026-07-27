import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-launch-latin-america');
}

export default function BaiakLaunchLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-launch-latin-america" />;
}
