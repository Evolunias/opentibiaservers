import CustomMapPage, { generateMetadata } from './custom-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapPage />;
}
