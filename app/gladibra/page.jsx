import GladibraPage, { generateMetadata } from './gladibra';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GladibraPage />;
}
