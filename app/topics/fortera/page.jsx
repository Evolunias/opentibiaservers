import ForteraKeywordPage, { generateMetadata } from './fortera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForteraKeywordPage />;
}
