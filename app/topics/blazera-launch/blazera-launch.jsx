import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-launch');
}

export default function BlazeraLaunchKeywordPage() {
  return <StaticKeywordPage slug="blazera-launch" />;
}
