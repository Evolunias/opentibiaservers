import FreeOtPage, { generateMetadata } from './free-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreeOtPage />;
}
