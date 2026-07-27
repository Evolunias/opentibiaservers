import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-launch');
}

export default function OtservlistLaunchKeywordPage() {
  return <StaticKeywordPage slug="otservlist-launch" />;
}
