import ElythiaPage, { generateMetadata } from './elythia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElythiaPage />;
}
