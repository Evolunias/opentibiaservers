import Pokeavalar2Page, { generateMetadata } from './pokeavalar-2';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Pokeavalar2Page />;
}
