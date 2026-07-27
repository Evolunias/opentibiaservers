import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-launch');
}

export default function AlasteraLaunchKeywordPage() {
  return <StaticKeywordPage slug="alastera-launch" />;
}
