import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-launch');
}

export default function TibiascapeLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-launch" />;
}
