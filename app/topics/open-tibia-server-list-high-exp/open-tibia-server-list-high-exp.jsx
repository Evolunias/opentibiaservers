import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list-high-exp');
}

export default function OpenTibiaServerListHighExpKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list-high-exp" />;
}
