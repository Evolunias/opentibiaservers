import RookhavenPage, { generateMetadata } from './rookhaven';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookhavenPage />;
}
