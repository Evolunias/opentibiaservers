import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-launch');
}

export default function TibiaraLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibiara-launch" />;
}
