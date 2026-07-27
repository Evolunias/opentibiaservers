import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-launch');
}

export default function TibiaretroLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-launch" />;
}
