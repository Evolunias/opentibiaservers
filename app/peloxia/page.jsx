import PeloxiaPage, { generateMetadata } from './peloxia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PeloxiaPage />;
}
