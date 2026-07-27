import ForteraServerKeywordPage, { generateMetadata } from './fortera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForteraServerKeywordPage />;
}
