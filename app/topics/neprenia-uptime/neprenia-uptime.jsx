import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-uptime');
}

export default function NepreniaUptimeKeywordPage() {
  return <StaticKeywordPage slug="neprenia-uptime" />;
}
