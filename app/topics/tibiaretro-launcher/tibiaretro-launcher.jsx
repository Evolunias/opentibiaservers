import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-launcher');
}

export default function TibiaretroLauncherKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-launcher" />;
}
