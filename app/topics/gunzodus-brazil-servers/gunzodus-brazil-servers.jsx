import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-brazil-servers');
}

export default function GunzodusBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-brazil-servers" />;
}
