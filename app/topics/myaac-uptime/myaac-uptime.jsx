import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-uptime');
}

export default function MyaacUptimeKeywordPage() {
  return <StaticKeywordPage slug="myaac-uptime" />;
}
