import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-launch');
}

export default function SabrehavenLaunchKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-launch" />;
}
