import CanaryPage, { generateMetadata } from './canary';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanaryPage />;
}
