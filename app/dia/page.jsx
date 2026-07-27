import DiaPage, { generateMetadata } from './dia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DiaPage />;
}
