import BlazeraWarsKeywordPage, { generateMetadata } from './blazera-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraWarsKeywordPage />;
}
