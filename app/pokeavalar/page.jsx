import PokeavalarPage, { generateMetadata } from './pokeavalar';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PokeavalarPage />;
}
