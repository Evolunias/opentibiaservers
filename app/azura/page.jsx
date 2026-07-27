import AzuraPage, { generateMetadata } from './azura';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AzuraPage />;
}
