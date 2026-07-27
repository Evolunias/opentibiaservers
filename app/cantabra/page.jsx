import CantabraPage, { generateMetadata } from './cantabra';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CantabraPage />;
}
