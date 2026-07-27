import BellumRubinotPage, { generateMetadata } from './bellum-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BellumRubinotPage />;
}
