import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-launcher');
}

export default function NepreniaLauncherKeywordPage() {
  return <StaticKeywordPage slug="neprenia-launcher" />;
}
