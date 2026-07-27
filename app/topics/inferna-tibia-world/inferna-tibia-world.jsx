import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('inferna-tibia-world');
}

export default function InfernaTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="inferna-tibia-world" />;
}
