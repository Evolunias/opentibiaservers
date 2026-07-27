import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-launch');
}

export default function VenoreotLaunchKeywordPage() {
  return <StaticKeywordPage slug="venoreot-launch" />;
}
