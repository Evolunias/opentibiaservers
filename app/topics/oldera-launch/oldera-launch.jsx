import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-launch');
}

export default function OlderaLaunchKeywordPage() {
  return <StaticKeywordPage slug="oldera-launch" />;
}
