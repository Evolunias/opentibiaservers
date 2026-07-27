import EpocaPage, { generateMetadata } from './epoca';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EpocaPage />;
}
