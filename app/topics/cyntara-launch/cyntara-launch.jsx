import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-launch');
}

export default function CyntaraLaunchKeywordPage() {
  return <StaticKeywordPage slug="cyntara-launch" />;
}
