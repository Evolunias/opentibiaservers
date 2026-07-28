import PsoulClassicPage, { generateMetadata } from './psoul-classic';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PsoulClassicPage />;
}
