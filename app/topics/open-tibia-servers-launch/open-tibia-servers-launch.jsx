import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-launch');
}

export default function OpenTibiaServersLaunchKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-launch" />;
}
