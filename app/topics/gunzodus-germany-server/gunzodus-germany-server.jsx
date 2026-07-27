import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-germany-server');
}

export default function GunzodusGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-germany-server" />;
}
