import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-uk-server');
}

export default function GunzodusUkServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-uk-server" />;
}
