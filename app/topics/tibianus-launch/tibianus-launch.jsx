import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-launch');
}

export default function TibianusLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibianus-launch" />;
}
