import SaphiraPage, { generateMetadata } from './saphira';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaphiraPage />;
}
