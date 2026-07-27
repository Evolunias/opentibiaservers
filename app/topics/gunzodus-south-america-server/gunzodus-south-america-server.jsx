import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-south-america-server');
}

export default function GunzodusSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-south-america-server" />;
}
