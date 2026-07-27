import PrimotPage, { generateMetadata } from './primot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PrimotPage />;
}
