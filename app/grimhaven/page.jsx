import GrimhavenPage, { generateMetadata } from './grimhaven';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GrimhavenPage />;
}
