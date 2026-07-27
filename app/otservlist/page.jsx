import OtservlistPage, { generateMetadata } from './otservlist';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistPage />;
}
