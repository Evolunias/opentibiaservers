import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-launch');
}

export default function LumineraLaunchKeywordPage() {
  return <StaticKeywordPage slug="luminera-launch" />;
}
