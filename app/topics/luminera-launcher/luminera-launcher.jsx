import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-launcher');
}

export default function LumineraLauncherKeywordPage() {
  return <StaticKeywordPage slug="luminera-launcher" />;
}
