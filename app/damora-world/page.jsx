import DamoraWorldPage, { generateMetadata } from './damora-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DamoraWorldPage />;
}
