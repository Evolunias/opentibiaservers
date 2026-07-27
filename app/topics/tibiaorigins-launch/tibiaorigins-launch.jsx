import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-launch');
}

export default function TibiaoriginsLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-launch" />;
}
