import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-south-america-servers');
}

export default function GunzodusSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-south-america-servers" />;
}
