import DemolidoresSimilarServersKeywordPage, { generateMetadata } from './demolidores-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresSimilarServersKeywordPage />;
}
