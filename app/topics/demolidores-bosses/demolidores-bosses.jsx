import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-bosses');
}

export default function DemolidoresBossesKeywordPage() {
  return <StaticKeywordPage slug="demolidores-bosses" />;
}
