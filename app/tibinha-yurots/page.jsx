import TibinhaYurotsPage, { generateMetadata } from './tibinha-yurots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibinhaYurotsPage />;
}
