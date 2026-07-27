import CalmeraOtPage, { generateMetadata } from './calmera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtPage />;
}
