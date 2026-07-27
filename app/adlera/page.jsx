import AdleraPage, { generateMetadata } from './adlera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AdleraPage />;
}
