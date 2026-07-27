import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list-germany');
}

export default function OpenTibiaServerListGermanyKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list-germany" />;
}
