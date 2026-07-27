import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-list');
}

export default function OpenTibiaServersListKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-list" />;
}
