import AureraWorldPage, { generateMetadata } from './aurera-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraWorldPage />;
}
