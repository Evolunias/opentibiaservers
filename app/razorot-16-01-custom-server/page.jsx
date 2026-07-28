import Razorot1601CustomServerPage, { generateMetadata } from './razorot-16-01-custom-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Razorot1601CustomServerPage />;
}
