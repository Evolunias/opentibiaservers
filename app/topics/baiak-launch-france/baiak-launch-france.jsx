import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-launch-france');
}

export default function BaiakLaunchFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-launch-france" />;
}
