import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-uptime');
}

export default function TibiaoriginsUptimeKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-uptime" />;
}
