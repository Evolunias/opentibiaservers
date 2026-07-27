import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-launch');
}

export default function OtlandLaunchKeywordPage() {
  return <StaticKeywordPage slug="otland-launch" />;
}
