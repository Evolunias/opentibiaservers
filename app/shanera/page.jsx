import ShaneraPage, { generateMetadata } from './shanera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShaneraPage />;
}
