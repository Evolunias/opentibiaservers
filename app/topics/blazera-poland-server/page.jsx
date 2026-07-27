import BlazeraPolandServerKeywordPage, { generateMetadata } from './blazera-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraPolandServerKeywordPage />;
}
