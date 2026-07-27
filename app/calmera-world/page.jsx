import CalmeraWorldPage, { generateMetadata } from './calmera-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraWorldPage />;
}
