import JattariaPage, { generateMetadata } from './jattaria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JattariaPage />;
}
