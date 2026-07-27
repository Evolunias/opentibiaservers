import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-guide-south-america');
}

export default function RetroGuideSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-guide-south-america" />;
}
