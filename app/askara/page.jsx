import AskaraPage, { generateMetadata } from './askara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AskaraPage />;
}
