import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-high-exp');
}

export default function OpenTibiaServersHighExpKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-high-exp" />;
}
