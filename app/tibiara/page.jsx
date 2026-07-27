import TibiaraPage, { generateMetadata } from './tibiara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraPage />;
}
