import DemolidoresDonationsKeywordPage, { generateMetadata } from './demolidores-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresDonationsKeywordPage />;
}
