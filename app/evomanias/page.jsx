import EvomaniasPage, { generateMetadata } from './evomanias';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvomaniasPage />;
}
