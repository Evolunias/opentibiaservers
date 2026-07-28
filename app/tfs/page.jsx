import TfsPage, { generateMetadata } from './tfs';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TfsPage />;
}
