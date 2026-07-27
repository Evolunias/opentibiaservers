import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-launch');
}

export default function OriginaltibiaLaunchKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-launch" />;
}
