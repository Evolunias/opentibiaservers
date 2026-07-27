import TitaniaPage, { generateMetadata } from './titania';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TitaniaPage />;
}
