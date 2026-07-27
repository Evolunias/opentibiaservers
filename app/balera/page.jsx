import BaleraPage, { generateMetadata } from './balera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaleraPage />;
}
