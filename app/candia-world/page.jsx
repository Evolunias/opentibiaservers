import CandiaWorldPage, { generateMetadata } from './candia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CandiaWorldPage />;
}
