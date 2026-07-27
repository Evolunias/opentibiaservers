import BloxerOtPage, { generateMetadata } from './bloxer-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BloxerOtPage />;
}
