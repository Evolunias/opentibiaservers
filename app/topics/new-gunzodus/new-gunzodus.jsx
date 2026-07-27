import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-gunzodus');
}

export default function NewGunzodusKeywordPage() {
  return <StaticKeywordPage slug="new-gunzodus" />;
}
