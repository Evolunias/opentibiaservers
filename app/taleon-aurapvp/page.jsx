import TaleonAurapvpPage, { generateMetadata } from './taleon-aurapvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TaleonAurapvpPage />;
}
