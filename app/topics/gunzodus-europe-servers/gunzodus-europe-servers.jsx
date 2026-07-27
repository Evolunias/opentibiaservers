import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-europe-servers');
}

export default function GunzodusEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-europe-servers" />;
}
