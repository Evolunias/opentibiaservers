import NatalaPage, { generateMetadata } from './natala';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NatalaPage />;
}
