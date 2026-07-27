import ExodusotPage, { generateMetadata } from './exodusot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ExodusotPage />;
}
