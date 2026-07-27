import CyleriaPage, { generateMetadata } from './cyleria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyleriaPage />;
}
