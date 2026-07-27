import BonaPage, { generateMetadata } from './bona';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BonaPage />;
}
