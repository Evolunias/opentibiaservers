import GesiorPage, { generateMetadata } from './gesior';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GesiorPage />;
}
