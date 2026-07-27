import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-launch');
}

export default function OtservlistAlternativeLaunchKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-launch" />;
}
