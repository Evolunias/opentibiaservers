import EmperaPage, { generateMetadata } from './empera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmperaPage />;
}
