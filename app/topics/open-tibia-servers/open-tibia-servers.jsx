import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers');
}

export default function OpenTibiaServersKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers" />;
}
