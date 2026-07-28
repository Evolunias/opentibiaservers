import EternalOdysseyPage, { generateMetadata } from './eternal-odyssey';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyPage />;
}
