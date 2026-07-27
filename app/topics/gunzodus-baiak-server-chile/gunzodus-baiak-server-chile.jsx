import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-baiak-server-chile');
}

export default function GunzodusBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-baiak-server-chile" />;
}
