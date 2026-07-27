import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-client');
}

export default function OpenTibiaServersClientKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-client" />;
}
