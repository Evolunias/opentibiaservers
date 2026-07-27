import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-alternatives');
}

export default function GunzodusAlternativesKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-alternatives" />;
}
