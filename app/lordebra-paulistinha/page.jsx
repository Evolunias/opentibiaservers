import LordebraPaulistinhaPage, { generateMetadata } from './lordebra-paulistinha';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LordebraPaulistinhaPage />;
}
