import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-uptime');
}

export default function NostaltherUptimeKeywordPage() {
  return <StaticKeywordPage slug="nostalther-uptime" />;
}
