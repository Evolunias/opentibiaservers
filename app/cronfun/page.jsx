import CronfunPage, { generateMetadata } from './cronfun';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CronfunPage />;
}
