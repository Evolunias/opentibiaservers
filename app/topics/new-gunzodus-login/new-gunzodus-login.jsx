import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-gunzodus-login');
}

export default function NewGunzodusLoginKeywordPage() {
  return <StaticKeywordPage slug="new-gunzodus-login" />;
}
