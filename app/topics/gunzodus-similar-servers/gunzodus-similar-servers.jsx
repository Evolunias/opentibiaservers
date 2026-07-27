import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-similar-servers');
}

export default function GunzodusSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-similar-servers" />;
}
