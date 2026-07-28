import AdinotsPage, { generateMetadata } from './adinots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AdinotsPage />;
}
