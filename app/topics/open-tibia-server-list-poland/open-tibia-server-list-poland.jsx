import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list-poland');
}

export default function OpenTibiaServerListPolandKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list-poland" />;
}
