import HaleraPage, { generateMetadata } from './halera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HaleraPage />;
}
