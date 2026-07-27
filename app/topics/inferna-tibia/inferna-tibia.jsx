import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('inferna-tibia');
}

export default function InfernaTibiaKeywordPage() {
  return <StaticKeywordPage slug="inferna-tibia" />;
}
