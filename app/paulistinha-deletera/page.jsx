import PaulistinhaDeleteraPage, { generateMetadata } from './paulistinha-deletera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PaulistinhaDeleteraPage />;
}
