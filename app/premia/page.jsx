import PremiaPage, { generateMetadata } from './premia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PremiaPage />;
}
