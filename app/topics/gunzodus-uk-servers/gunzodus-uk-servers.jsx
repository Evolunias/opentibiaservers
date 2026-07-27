import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-uk-servers');
}

export default function GunzodusUkServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-uk-servers" />;
}
