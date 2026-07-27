import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('gunzodus');
}

export default function GunzodusPage() {
  return <StaticExactMatchPage slug="gunzodus" />;
}
