import ForteraWarsKeywordPage, { generateMetadata } from './fortera-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForteraWarsKeywordPage />;
}
