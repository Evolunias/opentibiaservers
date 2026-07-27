import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-demolidores-tibia');
}

export default function NewDemolidoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-demolidores-tibia" />;
}
