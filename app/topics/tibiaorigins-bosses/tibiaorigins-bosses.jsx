import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-bosses');
}

export default function TibiaoriginsBossesKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-bosses" />;
}
