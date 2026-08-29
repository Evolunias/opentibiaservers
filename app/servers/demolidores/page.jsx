import DemolidoresWikiPage from '@/app/components/DemolidoresWikiPage';
import { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata('demolidores');
}

export default function Page() {
  return <DemolidoresWikiPage />;
}
