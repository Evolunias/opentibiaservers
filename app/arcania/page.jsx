import ArcaniaPage, { generateMetadata } from './arcania';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniaPage />;
}
