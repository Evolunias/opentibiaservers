import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-launch');
}

export default function ElderaLaunchKeywordPage() {
  return <StaticKeywordPage slug="eldera-launch" />;
}
