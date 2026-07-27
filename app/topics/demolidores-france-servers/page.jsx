import DemolidoresFranceServersKeywordPage, { generateMetadata } from './demolidores-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresFranceServersKeywordPage />;
}
